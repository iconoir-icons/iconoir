import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class MoveUp extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const MoveUp({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22C10.8954 22 10 21.1046 10 20C10 18.8954 10.8954 18 12 18C13.1046 18 14 18.8954 14 20C14 21.1046 13.1046 22 12 22Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 15L12 2M12 2L15 5M12 2L9 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        colorFilter:
            color != null ? ColorFilter.mode(color!, BlendMode.srcIn) : null,
        width: width,
        height: height,
      );
}
