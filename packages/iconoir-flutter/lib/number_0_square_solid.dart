import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Number0SquareSolid extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Number0SquareSolid({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.6 2.25C2.85442 2.25 2.25 2.85441 2.25 3.6V20.4C2.25 21.1456 2.85441 21.75 3.6 21.75H20.4C21.1456 21.75 21.75 21.1456 21.75 20.4V3.6C21.75 2.85442 21.1456 2.25 20.4 2.25H3.6ZM10.25 10C10.25 9.30964 10.8096 8.75 11.5 8.75H12.5C13.1904 8.75 13.75 9.30964 13.75 10V14C13.75 14.6904 13.1904 15.25 12.5 15.25H11.5C10.8096 15.25 10.25 14.6904 10.25 14V10ZM11.5 7.25C9.98122 7.25 8.75 8.48122 8.75 10V14C8.75 15.5188 9.98122 16.75 11.5 16.75H12.5C14.0188 16.75 15.25 15.5188 15.25 14V10C15.25 8.48122 14.0188 7.25 12.5 7.25H11.5Z" fill="currentColor"/>
</svg>
''',
        colorFilter:
            color != null ? ColorFilter.mode(color!, BlendMode.srcIn) : null,
        width: width,
        height: height,
      );
}
