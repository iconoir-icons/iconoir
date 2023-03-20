import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Scanning extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Scanning({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 3H3V6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 12H12L22 12" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 19V17V15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 16V15.5V15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 17V16V15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 21V19.5V18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 3H21V6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6 21H3V18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 21H21V18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        colorFilter:
            color != null ? ColorFilter.mode(color!, BlendMode.srcIn) : null,
        width: width,
        height: height,
      );
}
