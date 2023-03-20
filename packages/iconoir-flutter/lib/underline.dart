import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Underline extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Underline({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 5V11C16 13.2091 14.2091 15 12 15V15C9.79086 15 8 13.2091 8 11V5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 19L18 19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        colorFilter:
            color != null ? ColorFilter.mode(color!, BlendMode.srcIn) : null,
        width: width,
        height: height,
      );
}
