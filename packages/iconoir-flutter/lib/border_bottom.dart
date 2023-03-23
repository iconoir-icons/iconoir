import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class BorderBottom extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const BorderBottom({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 4.01L20.01 3.99889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 4.01L16.01 3.99889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 4.01L12.01 3.99889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 4.01L8.01 3.99889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 4.01L4.01 3.99889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 8.01L4.01 7.99889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 12.01L4.01 11.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 12.01L12.01 11.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 16.01L4.01 15.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 8.01L20.01 7.99889" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 12.01L20.01 11.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 16.01L20.01 15.9989" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 20H20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        colorFilter:
            color != null ? ColorFilter.mode(color!, BlendMode.srcIn) : null,
        width: width,
        height: height,
      );
}
