FROM ruby:2.3.4

ENV APP_HOME /app
WORKDIR ${APP_HOME}

ENV BUNDLE_JOBS=5 \
    BUNDLE_PATH=/bundle \
    BUNDLE_BIN=/bundle/bin \
    GEM_HOME=/bundle \
    BUNDLE_GEMFILE=$APP_HOME/Gemfile

ENV PATH="${BUNDLE_BIN}:${PATH}"

ADD . .
RUN bundle check || bundle install --full-index --jobs 20 --retry 5
EXPOSE 4000
CMD ["bundle", "exec", "jekyll", "serve", "--host=0.0.0.0"]