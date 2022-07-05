import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class ArrowUnionVertical extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const ArrowUnionVertical({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.5 6L12 9.5L8.5 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15.5 17.5L12 14L8.5 17.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
