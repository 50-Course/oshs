FROM python:3.10.4

ENV PYTHONUNBUFFERED 1
RUN mkdir /backend
COPY . /backend/

RUN pip install --upgrade pip
RUN pip install -r /backend/requirements.txt

WORKDIR /backend