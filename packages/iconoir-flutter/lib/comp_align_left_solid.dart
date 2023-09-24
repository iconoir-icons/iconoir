import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class CompAlignLeftSolid extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const CompAlignLeftSolid({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 22L3 2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19 16H9C7.89543 16 7 15.1046 7 14V10C7 8.89543 7.89543 8 9 8H19C20.1046 8 21 8.89543 21 10V14C21 15.1046 20.1046 16 19 16Z" fill="currentColor" stroke="currentColor" stroke-width="1.5"/>
</svg>
''',
        colorFilter:
            color != null ? ColorFilter.mode(color!, BlendMode.srcIn) : null,
        width: width,
        height: height,
      );
}
