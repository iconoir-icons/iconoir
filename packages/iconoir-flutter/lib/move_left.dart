import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class MoveLeft extends StatelessWidget {
  const MoveLeft({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/MoveLeft.svg');
}
