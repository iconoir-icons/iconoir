import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class BubbleWarning extends StatelessWidget {
  const BubbleWarning({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/BubbleWarning.svg');
}
