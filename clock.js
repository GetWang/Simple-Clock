var analogClock = {
  currTime: new Date(),
  currSecondDeg: 0,
  currMinuteDeg: 0,
  currHourDeg: 0,
  /* 计算出秒针应该旋转的角度并保存 */
  getSecondDeg: function () {
    this.currSecondDeg = this.currTime.getSeconds() * 6;
    return this.currSecondDeg;
  },
  /* 计算出分针应该旋转的角度并保存 */
  getMinuteDeg: function () {
    this.currMinuteDeg = Math.round((this.currTime.getMinutes() * 6) + (this.currTime.getSeconds() / 10));
    return this.currMinuteDeg;
  },
  /* 计算出时针应该旋转的角度并保存 */
  getHourDeg: function () {
    var hour = this.currTime.getHours();
    if (hour > 11) {
      hour -= 12;
    }
    this.currHourDeg = Math.round((hour * 30) + (this.currTime.getMinutes() / 2) + (this.currTime.getSeconds() / 10));
    return this.currHourDeg;
  },
  /* 旋转相应的指针 */
  fRotate: function (id, deg) {
    document.getElementById(id).style.transform = 'rotate(' + deg +'deg)';
  },
  init: function () {
    var me = this;
    this.fRotate('analogSecond', this.getSecondDeg());
    this.fRotate('analogMinute', this.getMinuteDeg());
    this.fRotate('analogHour', this.getHourDeg());
    this.updateTimer = setInterval(function () {
      me.updateTime();
    }, 1000);
  },
  /* 更新时间并旋转相应角度 */
  updateTime: function () {
    this.currTime = new Date();
    this.fRotate('analogSecond', this.getSecondDeg());
    this.fRotate('analogMinute', this.getMinuteDeg());
    this.fRotate('analogHour', this.getHourDeg());
  }
};
analogClock.init();