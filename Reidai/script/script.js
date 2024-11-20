// JavaScript用ファイル
new Vue({
    el: '#app',
    
    data: {
      password:'',
      password_conf:''
    },
    computed: {
      // 入力されている、且つパスワードが一致しているかを確認する算出プロパティ
      // 入力されているかは、this.･･･ で判定可能
      // 例）一致TRUE（パスワード：aaaa、パスワード確認：aaaa）
      // 例）不一致FALSE（パスワード：aaaa、パスワード確認：aaab）
      isSubmit() {
        return (this.password !== this.password_conf) && (this.password.length > 0) && (this.password_conf.length > 0); 
      },
      // ボタンをTRUEなら登録を表示orFALSEなら使用不可を表示にする算出プロパティ
      submit(){
        return (this.password === this.password_conf) && (this.password.length > 0) && (this.password_conf.length > 0); 
      }

    }
  });