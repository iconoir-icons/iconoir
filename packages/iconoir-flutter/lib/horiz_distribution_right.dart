import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class HorizDistributionRight extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const HorizDistributionRight({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 17V7M5 17H10.4C10.7314 17 11 16.7314 11 16.4V7.6C11 7.26863 10.7314 7 10.4 7H5M5 17V20M5 7V4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M15 17V7M15 17H18.4C18.7314 17 19 16.7314 19 16.4V7.6C19 7.26863 18.7314 7 18.4 7H15M15 17V20M15 7V4" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
