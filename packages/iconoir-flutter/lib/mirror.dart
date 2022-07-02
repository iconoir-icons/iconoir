import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Mirror extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Mirror({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 4V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V4C4 2.89543 4.89543 2 6 2H18C19.1046 2 20 2.89543 20 4Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 5L14 10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 9L12.5 15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
