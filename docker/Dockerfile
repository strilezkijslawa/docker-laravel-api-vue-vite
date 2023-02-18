FROM ubuntu:focal

ENV TZ              Europe/Kiev
ENV DEBIAN_FRONTEND noninteractive

RUN apt-get update && DEBIAN_FRONTEND=noninteractive apt-get install -y locales
RUN sed -i -e 's/# en_US.UTF-8 UTF-8/en_US.UTF-8 UTF-8/' /etc/locale.gen && \
    dpkg-reconfigure --frontend=noninteractive locales && \
    update-locale LANG=en_US.UTF-8

ENV LANG            en_US.UTF-8
ENV LANG            en_US.UTF-8
ENV LC_ALL          en_US.UTF-8
ENV LANGUAGE        en_US:en

RUN DEBIAN_FRONTEND=noninteractive && \
    apt-get update && \
    apt-get dist-upgrade -y && \
    apt-get install -y nginx-extras ca-certificates gettext-base curl nano && \
    rm -rf /var/cache/apt && rm -rf /var/lib/apt

EXPOSE 80

ADD ./docker/nginx.conf /etc/nginx/conf.d/
RUN rm /etc/nginx/sites-available/default
RUN rm /etc/nginx/sites-enabled/default

WORKDIR /www

RUN chown -R www-data:www-data /www

CMD nginx -g 'daemon off;'
