const keywordBlackList = process.env.KEYWORD_BLACK_LIST?.split(',') || [];
const host = process.env.HOST || '';

module.exports = {
  mailin: {
    host: '0.0.0.0',
    port: 25,
    disableWebhook: true
  },
  host,
  keywordBlackList
};
