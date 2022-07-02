import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class BorderBr extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const BorderBr({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.01 4L20.01 20L4.00999 20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.99999 16L4.01111 16.01" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.99999 12L4.01111 12.01" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.99999 8L4.01111 8.01" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.99999 4L4.01111 4.01" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 4L16.0111 4.01" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 4L12.0111 4.01" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.99999 4L8.01111 4.01" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
