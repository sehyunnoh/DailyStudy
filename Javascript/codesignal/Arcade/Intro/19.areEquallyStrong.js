function areEquallyStrong(yl, yr, fl, fr) {
  return yl + yr !== fl + fr ? false : yl == fl || yr == fr ? true : false;
}
