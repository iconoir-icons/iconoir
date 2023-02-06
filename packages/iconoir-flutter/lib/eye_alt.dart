import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class EyeAlt extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const EyeAlt({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 13C6.6 5 17.4 5 21 13" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 17C10.3431 17 9 15.6569 9 14C9 12.3431 10.3431 11 12 11C13.6569 11 15 12.3431 15 14C15 15.6569 13.6569 17 12 17Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
