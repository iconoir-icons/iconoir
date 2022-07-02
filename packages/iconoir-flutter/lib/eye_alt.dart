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
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.5 12.5C7.5 6 16.5 6 19.5 12.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 16C10.8954 16 10 15.1046 10 14C10 12.8954 10.8954 12 12 12C13.1046 12 14 12.8954 14 14C14 15.1046 13.1046 16 12 16Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
