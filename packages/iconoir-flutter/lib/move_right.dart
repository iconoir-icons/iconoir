import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class MoveRight extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const MoveRight({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 14C2.89543 14 2 13.1046 2 12C2 10.8954 2.89543 10 4 10C5.10457 10 6 10.8954 6 12C6 13.1046 5.10457 14 4 14Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9 12H22M22 12L19 9M22 12L19 15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        colorFilter:
            color != null ? ColorFilter.mode(color!, BlendMode.srcIn) : null,
        width: width,
        height: height,
      );
}
