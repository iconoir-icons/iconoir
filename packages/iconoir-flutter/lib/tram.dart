import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Tram extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Tram({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 20H11L9.27639 23.4472C9.107 23.786 8.76074 24 8.38197 24H7.61803C6.87465 24 6.39116 23.2177 6.72361 22.5528L8 20Z" fill="currentColor"/>
<path d="M16 20H13L14.7236 23.4472C14.893 23.786 15.2393 24 15.618 24H16.382C17.1253 24 17.6088 23.2177 17.2764 22.5528L16 20Z" fill="currentColor"/>
<path d="M15 16.01L15.01 15.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 16.01L9.01 15.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13 6H15C17.7614 6 20 8.23858 20 11V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V11C4 8.23858 6.23858 6 9 6H13ZM13 6L14 2M14 2H17M14 2H7M16 11.7857V11.7857C16 11.9041 15.9041 12 15.7857 12H8.21429C8.09594 12 8 11.9041 8 11.7857V11.7857C8 10.7995 8.79949 10 9.78571 10H14.2143C15.2005 10 16 10.7995 16 11.7857Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
