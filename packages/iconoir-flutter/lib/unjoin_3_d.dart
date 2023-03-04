import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Unjoin3D extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const Unjoin3D({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.5 7L9 12H15L12.5 17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.8388 20.8391H17.3033M20.8388 20.8391V17.3035M20.8388 20.8391L17 17" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.76777 2.76788H6.3033M2.76777 2.76788V6.30341M2.76777 2.76788L6.60657 6.60693" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
