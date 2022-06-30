import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Skateboard extends StatelessWidget {
  const Skateboard({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Skateboard.svg');
}
