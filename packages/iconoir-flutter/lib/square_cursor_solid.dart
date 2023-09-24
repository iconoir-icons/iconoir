import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class SquareCursorSolid extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const SquareCursorSolid({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 12V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
<path d="M20.879 16.9176C21.373 17.2216 21.342 17.9606 20.834 18.0186L18.267 18.3096L17.116 20.6216C16.888 21.0806 16.183 20.8556 16.066 20.2876L14.811 14.1716C14.712 13.6916 15.144 13.3896 15.561 13.6466L20.879 16.9176Z" fill="currentColor" stroke="currentColor" stroke-width="1.5"/>
</svg>
''',
        colorFilter:
            color != null ? ColorFilter.mode(color!, BlendMode.srcIn) : null,
        width: width,
        height: height,
      );
}
