import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Droplet extends StatelessWidget {
  const Droplet({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Droplet.svg');
}
