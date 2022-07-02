import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class EyeClose extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const EyeClose({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.5 8C7.5 14.5 16.5 14.5 19.5 8" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.8162 11.3175L19.5 15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 12.875V16.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.18383 11.3175L4.5 15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
