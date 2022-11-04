FROM node:18-alpine
RUN mkdir /code
WORKDIR /code

RUN apk --update add tzdata && \
    cp /usr/share/zoneinfo/Asia/Tokyo /etc/localtime && \
    apk del tzdata && \
    apk add --no-cache bash && \
    apk add --no-cache git

COPY . /code

EXPOSE 3000