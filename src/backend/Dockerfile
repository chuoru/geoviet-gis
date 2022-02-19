FROM python:3.8
ENV PYTHONUNBUFFERED 1
COPY . /app
WORKDIR /app/server
RUN pip install -r requirements.txt
WORKDIR /app
ENTRYPOINT ["sh","docker-entrypoint.sh"]