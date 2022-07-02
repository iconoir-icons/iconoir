import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class MoveDown extends StatelessWidget {
  final Color? color;
  final double? width;
  final double? height;

  const MoveDown({Key? key, this.color, this.width, this.height})
      : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.string(
        '''
<svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6C10.8954 6 10 5.10457 10 4C10 2.89543 10.8954 2 12 2C13.1046 2 14 2.89543 14 4C14 5.10457 13.1046 6 12 6Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 9L12 22M12 22L15 19M12 22L9 19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
''',
        color: color,
        width: width,
        height: height,
      );
}
