import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Crown extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Crown({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.2 17L21 7L14.7 10L12 7L9.3 10L3 7L4.8 17H19.2Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        colorFilter:
            color != null ? ColorFilter.mode(color!, BlendMode.srcIn) : null,
        width: width,
        height: height,
      );
}
