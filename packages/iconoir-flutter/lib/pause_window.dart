import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class PauseWindow extends StatelessWidget {
  const PauseWindow({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/PauseWindow.svg');
}
