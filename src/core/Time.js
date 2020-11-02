export default {
  /**
   * Promiseを使い指定の時間待機します。
   * @param {Number} ms 待機時間（ミリ秒）
   * @return {Promise} 引数の指定時間経過後にresolveされます
   */
  wait(ms) {
    return new Promise((resolve) => {
      window.setTimeout(resolve, ms);
    });
  },
};
