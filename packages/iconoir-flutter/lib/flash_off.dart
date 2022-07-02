import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class FlashOff extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const FlashOff({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.58537 7.87573L7.28022 11.5983C7.21689 12.302 7.67895 12.9296 8.31226 13C8.3695 13.0053 8.3695 13.0053 8.42693 13.0063L10.9996 13L10.5489 20.6831C10.5366 20.892 10.8127 20.9772 10.9199 20.7974C11.5966 19.6617 12.9824 17.3334 14.2474 15.193" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.5 3H13.5001C13.6275 3 13.7541 3.0235 13.8747 3.06956C14.4766 3.29947 14.7968 4.02807 14.5899 4.69693L13.1009 8.80233L15.8475 8.80235C16.0507 8.80235 16.2503 8.86206 16.4261 8.97543C16.9765 9.33051 17.1637 10.1142 16.8442 10.7259C16.7751 10.8617 16.6018 11.1694 16.3547 11.5983" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 4L20 20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
