import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Notes extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Notes({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 14L16 14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 10L10 10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 18L12 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10 3H6C4.89543 3 4 3.89543 4 5V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V5C20 3.89543 19.1046 3 18 3H14.5M10 3V1M10 3V5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        colorFilter:
            color != null ? ColorFilter.mode(color!, BlendMode.srcIn) : null,
        width: width,
        height: height,
      );
}
