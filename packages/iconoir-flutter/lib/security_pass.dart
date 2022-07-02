import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class SecurityPass extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const SecurityPass({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 11L12 14L20 6" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C12.9473 4 13.8561 4.16464 14.6994 4.46686" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
