import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class PlaystationGamepad extends StatelessWidget {
  const PlaystationGamepad({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/PlaystationGamepad.svg');
}
