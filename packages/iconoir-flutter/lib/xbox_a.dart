import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class XboxA extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const XboxA({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 16L12 8L9 16" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14 14L10 14" stroke="currentColor"  stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
