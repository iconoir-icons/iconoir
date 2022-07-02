import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class BounceRight extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const BounceRight({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19 7C17.8954 7 17 6.10457 17 5C17 3.89543 17.8954 3 19 3C20.1046 3 21 3.89543 21 5C21 6.10457 20.1046 7 19 7Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 15.5C7 14.5 9.5 15 12 20C12.5 17 14 12.5 15.5 10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
