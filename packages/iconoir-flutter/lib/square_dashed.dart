import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class SquareDashed extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const SquareDashed({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 4H4V7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 11V13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11 4H13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11 20H13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 11V13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 4H20V7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7 20H4V17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 20H20V17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        colorFilter:
            color != null ? ColorFilter.mode(color!, BlendMode.srcIn) : null,
        width: width,
        height: height,
      );
}
