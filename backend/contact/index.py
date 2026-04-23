import json
import os
import smtplib
import ssl
from email.message import EmailMessage


def handler(event: dict, context) -> dict:
    '''
    Business: Принимает заявки с сайта и отправляет их на почту владельца через SMTP.
    Args: event - dict с httpMethod, body (name, phone, email, message); context - объект с request_id.
    Returns: HTTP-ответ с JSON {success: bool} и CORS-заголовками.
    '''
    method = event.get('httpMethod', 'POST')
    cors = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Max-Age': '86400',
        'Content-Type': 'application/json',
    }

    if method == 'OPTIONS':
        return {'statusCode': 200, 'headers': cors, 'body': ''}

    if method != 'POST':
        return {'statusCode': 405, 'headers': cors, 'body': json.dumps({'error': 'Method not allowed'})}

    try:
        body = json.loads(event.get('body') or '{}')
    except json.JSONDecodeError:
        return {'statusCode': 400, 'headers': cors, 'body': json.dumps({'error': 'Invalid JSON'})}

    name = (body.get('name') or '').strip()
    phone = (body.get('phone') or '').strip()
    email = (body.get('email') or '').strip()
    message = (body.get('message') or '').strip()

    if not name or not phone:
        return {'statusCode': 400, 'headers': cors, 'body': json.dumps({'error': 'Имя и телефон обязательны'})}

    smtp_host = os.environ.get('SMTP_HOST', '')
    smtp_port = int(os.environ.get('SMTP_PORT', '465'))
    smtp_user = os.environ.get('SMTP_USER', '')
    smtp_password = os.environ.get('SMTP_PASSWORD', '')
    email_to = os.environ.get('CONTACT_EMAIL_TO', 'sitalov-leonid@project-rai.ru')

    if not smtp_host or not smtp_user or not smtp_password:
        return {'statusCode': 500, 'headers': cors, 'body': json.dumps({'error': 'SMTP не настроен'})}

    subject = f'Новая заявка с сайта Проект RAI — {name}'
    text = (
        f'Новая заявка с сайта project-rai.ru\n\n'
        f'Имя: {name}\n'
        f'Телефон: {phone}\n'
        f'Email: {email or "—"}\n'
        f'Сообщение: {message or "—"}\n'
    )

    msg = EmailMessage()
    msg['Subject'] = subject
    msg['From'] = smtp_user
    msg['To'] = email_to
    if email:
        msg['Reply-To'] = email
    msg.set_content(text)

    context_ssl = ssl.create_default_context()
    if smtp_port == 465:
        with smtplib.SMTP_SSL(smtp_host, smtp_port, context=context_ssl, timeout=15) as server:
            server.login(smtp_user, smtp_password)
            server.send_message(msg)
    else:
        with smtplib.SMTP(smtp_host, smtp_port, timeout=15) as server:
            server.starttls(context=context_ssl)
            server.login(smtp_user, smtp_password)
            server.send_message(msg)

    return {'statusCode': 200, 'headers': cors, 'body': json.dumps({'success': True})}
