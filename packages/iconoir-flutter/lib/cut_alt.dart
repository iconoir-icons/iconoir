import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class CutAlt extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const CutAlt({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.23611 8C6.71115 7.46924 7 6.76835 7 6C7 4.34315 5.65685 3 4 3C2.34315 3 1 4.34315 1 6C1 7.65685 2.34315 9 4 9C4.8885 9 5.68679 8.61375 6.23611 8ZM6.23611 8L16 16" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 12H17.5H18" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 12H22.5H23" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.23611 16C6.71115 16.5308 7 17.2316 7 18C7 19.6569 5.65685 21 4 21C2.34315 21 1 19.6569 1 18C1 16.3431 2.34315 15 4 15C4.8885 15 5.68679 15.3863 6.23611 16ZM6.23611 16L16 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
