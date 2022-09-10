import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class JpegFormat extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const JpegFormat({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 15V12M7 12V9H10L10 12H7Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 9H13L13 15L16 15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 9H19V15L22 15V12.6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 9C4 9 4 11.4 4 13.2C4 15 2 15 2 15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13 12H15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 6V3.6C4 3.26863 4.26863 3 4.6 3H19.4C19.7314 3 20 3.26863 20 3.6V6" stroke="currentColor" stroke-linecap="round"/>
<path d="M4 18V20.4C4 20.7314 4.26863 21 4.6 21H19.4C19.7314 21 20 20.7314 20 20.4V18" stroke="currentColor" stroke-linecap="round"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
