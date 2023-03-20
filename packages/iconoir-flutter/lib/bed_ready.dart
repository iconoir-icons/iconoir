import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class BedReady extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const BedReady({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 16V4C21 2.89543 20.1046 2 19 2H5C3.89543 2 3 2.89543 3 4V20C3 21.1046 3.89543 22 5 22H14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 8L11 8L11 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21 8L13 8L13 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 20L18 22L22 18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        colorFilter:
            color != null ? ColorFilter.mode(color!, BlendMode.srcIn) : null,
        width: width,
        height: height,
      );
}
