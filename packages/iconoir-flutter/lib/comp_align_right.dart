import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class CompAlignRight extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const CompAlignRight({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 22V2" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 16H5C3.89543 16 3 15.1046 3 14L3 10C3 8.89543 3.89543 8 5 8H15C16.1046 8 17 8.89543 17 10V14C17 15.1046 16.1046 16 15 16Z" stroke="currentColor"/>
</svg>
''',
        colorFilter:
            color != null ? ColorFilter.mode(color!, BlendMode.srcIn) : null,
        width: width,
        height: height,
      );
}
