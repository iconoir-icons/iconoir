import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class KeyframePosition extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const KeyframePosition({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.73 8.36L12.48 11.36C12.24 11.68 11.76 11.68 11.52 11.36L9.27 8.36C9.11 8.14667 9.11 7.85333 9.27 7.64L11.52 4.64C11.76 4.32 12.24 4.32 12.48 4.64L14.73 7.64C14.89 7.85333 14.89 8.14667 14.73 8.36Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 20H12L21 20M12 17V15" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
