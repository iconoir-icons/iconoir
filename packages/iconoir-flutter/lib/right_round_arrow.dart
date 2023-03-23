import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class RightRoundArrow extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const RightRoundArrow({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.75 12H16.75M16.75 12L14 14.75M16.75 12L14 9.25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2 15V9C2 6.79086 3.79086 5 6 5H18C20.2091 5 22 6.79086 22 9V15C22 17.2091 20.2091 19 18 19H6C3.79086 19 2 17.2091 2 15Z" stroke="currentColor" stroke-width="1.5"/>
</svg>
''',
        colorFilter:
            color != null ? ColorFilter.mode(color!, BlendMode.srcIn) : null,
        width: width,
        height: height,
      );
}
