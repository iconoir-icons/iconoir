import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Pocket extends StatelessWidget {
  const Pocket({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Pocket.svg');
}
