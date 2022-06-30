import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Lens extends StatelessWidget {
  const Lens({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Lens.svg');
}
