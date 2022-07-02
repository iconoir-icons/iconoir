import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class HomeSecure extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const HomeSecure({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 9.5L12 4L21 9.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 13V19.4C19 19.7314 18.7314 20 18.4 20H5.6C5.26863 20 5 19.7314 5 19.4V13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 12H14.4C14.7314 12 15 12.2686 15 12.6V15.4C15 15.7314 14.7314 16 14.4 16H9.6C9.26863 16 9 15.7314 9 15.4V12.6C9 12.2686 9.26863 12 9.6 12H10M14 12V10C14 9.33333 13.6 8 12 8C10.4 8 10 9.33333 10 10V12M14 12H10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
