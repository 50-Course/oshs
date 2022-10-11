FROM python:3.10.4

ENV PYTHONUNBUFFERED 1
RUN mkdir /backend
COPY . /backend/

RUN poetry add -r ./requirements.txt

WORKDIR /backend